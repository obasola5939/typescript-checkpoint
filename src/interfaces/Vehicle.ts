/**
 * Vehicle Interface
 * Defines the structure for any vehicle type
 */
export interface Vehicle {
  // Properties
  make: string;
  model: string;
  year: number;
  
  // Methods
  start(): void;
  
  // Optional properties (demonstrating interface flexibility)
  color?: string;
  mileage?: number;
  isRunning?: boolean;
  
  // Optional methods
  stop?(): void;
  getInfo?(): string;
}

/**
 * Extended interface for vehicles with additional features
 */
export interface LuxuryVehicle extends Vehicle {
  // Additional properties for luxury vehicles
  hasSunroof: boolean;
  hasHeatedSeats: boolean;
  navigationSystem: string;
  
  // Additional methods
  activateCruiseControl(): void;
  adjustSuspension(height: number): void;
}

/**
 * Interface for electric vehicles
 */
export interface ElectricVehicle extends Vehicle {
  batteryCapacity: number; // in kWh
  range: number; // in miles
  chargingTime: number; // in hours
  
  charge(): void;
  getBatteryLevel(): number;
}
