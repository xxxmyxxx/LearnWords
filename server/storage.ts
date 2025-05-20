import { 
  type ContactSubmission, 
  type InsertContact, 
  type Subscription, 
  type InsertSubscription 
} from "@shared/schema";

// Storage interface for managing contact submissions and subscriptions
export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private subscriptions: Map<number, Subscription>;
  private contactSubmissionsId: number;
  private subscriptionsId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.subscriptions = new Map();
    this.contactSubmissionsId = 1;
    this.subscriptionsId = 1;
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = this.contactSubmissionsId++;
    const createdAt = new Date();
    const submission: ContactSubmission = { 
      ...contact, 
      id, 
      createdAt 
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async createSubscription(subscription: InsertSubscription): Promise<Subscription> {
    // Check for duplicate email
    const existingSubscription = Array.from(this.subscriptions.values())
      .find(sub => sub.email === subscription.email);
    
    if (existingSubscription) {
      throw new Error("Email is already subscribed to the newsletter: duplicate");
    }

    const id = this.subscriptionsId++;
    const createdAt = new Date();
    const newSubscription: Subscription = { 
      ...subscription, 
      id, 
      createdAt 
    };
    this.subscriptions.set(id, newSubscription);
    return newSubscription;
  }
}

export const storage = new MemStorage();
