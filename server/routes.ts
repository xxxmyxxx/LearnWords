import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSubmissions, insertContactSchema, insertSubscriptionSchema, subscriptions } from "@shared/schema";
import { z } from "zod";
import { sendEmail } from './email';
import dotenv from 'dotenv';

dotenv.config();

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      await sendEmail({
        to: process.env.EMAIL_RECIPIENT || 'recipient@example.com',
        subject: `New Contact Form Submission: ${contactData.subject}`,
        text: `Name: ${contactData.name}\nEmail: ${contactData.email}\nMessage: ${contactData.message}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message}</p>
        `
      });
      
      return res.status(200).json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.format()
        });
      }
      
      console.error('Error processing contact form:', error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while submitting the form"
      });
    }
  });
  
  // Newsletter subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const subscriptionData = insertSubscriptionSchema.parse(req.body);
      
      // Store the subscription
      const subscription = await storage.createSubscription(subscriptionData);
      
      return res.status(201).json({
        success: true,
        message: "Subscribed successfully to the newsletter",
        data: subscription
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid email address",
          errors: error.format()
        });
      }
      
      // Handle duplicate email
      if (error instanceof Error && error.message.includes("duplicate")) {
        return res.status(400).json({
          success: false,
          message: "Email is already subscribed to the newsletter"
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "An error occurred while subscribing to the newsletter"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
