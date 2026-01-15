import { Vehicle, LuxuryVehicle, ElectricVehicle } from '../interfaces/Vehicle';

/**
 * Base Car class implementing Vehicle interface
 */
export class Car implements Vehicle {
  // Required properties from Vehicle interface
  public make: string;
  public model: string;
  public year: number;
  
  // Additional properties
  public color: string;
  public mileage: number;
  public isRunning: boolean;
  private vin: string; // Private property
  
  /**
   * Constructor to initialize Car properties
   * @param make - Manufacturer of the car
   * @param model - Model of the car
   * @param year - Manufacturing year
   * @param color - Color of the car (optional)
   * @param mileage - Current mileage (optional)
   */
  constructor(
    make: string,
    model: string,
    year: number,
    color: string = 'White',
    mileage: number = 0
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
    this.isRunning = false;
    this.vin = this.generateVIN(); // Generate unique VIN
  }
  
  /**
   * Implements the start method from Vehicle interface
   * Logs "Car engine started" to console
   */
  public start(): void {
    if (this.isRunning) {
      console.log(`${this.getFullName()} is already running!`);
      return;
    }
    
    this.isRunning = true;
    console.log(`🚗 ${this.getFullName()} engine started!`);
    console.log(`   VIN: ${this.vin}`);
    console.log(`   Year: ${this.year}`);
    console.log(`   Color: ${this.color}`);
  }
  
  /**
   * Optional stop method (not required by interface but implemented)
   */
  public stop(): void {
    if (!this.isRunning) {
      console.log(`${this.getFullName()} is already stopped!`);
      return;
    }
    
    this.isRunning = false;
    console.log(`🛑 ${this.getFullName()} engine stopped.`);
  }
  
  /**
   * Optional getInfo method
   * @returns String with car information
   */
  public getInfo(): string {
    return `${this.year} ${this.make} ${this.model} (${this.color}) - Mileage: ${this.mileage.toLocaleString()} miles`;
  }
  
  /**
   * Drive the car and update mileage
   * @param distance - Distance to drive in miles
   */
  public drive(distance: number): void {
    if (!this.isRunning) {
      console.log(`⚠️  Please start the car before driving!`);
      return;
    }
    
    this.mileage += distance;
    console.log(`🚙 ${this.getFullName()} drove ${distance} miles.`);
    console.log(`   Total mileage: ${this.mileage.toLocaleString()} miles`);
  }
  
  /**
   * Get the full name of the car (make + model)
   * @returns Full name string
   */
  public getFullName(): string {
    return `${this.make} ${this.model}`;
  }
  
  /**
   * Get car age based on current year
   * @returns Age of the car in years
   */
  public getAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
  
  /**
   * Generate a random VIN (Vehicle Identification Number)
   * @returns Generated VIN string
   */
  private generateVIN(): string {
    const chars = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';
    let vin = '';
    for (let i = 0; i < 17; i++) {
      vin += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return vin;
  }
  
  /**
   * Static method to create a Car instance
   * @param make - Manufacturer
   * @param model - Model
   * @param year - Year
   * @returns New Car instance
   */
  public static create(make: string, model: string, year: number): Car {
    return new Car(make, model, year);
  }
}

/**
 * Luxury Car class extending Car and implementing LuxuryVehicle interface
 */
export class LuxuryCar extends Car implements LuxuryVehicle {
  // LuxuryVehicle specific properties
  public hasSunroof: boolean;
  public hasHeatedSeats: boolean;
  public navigationSystem: string;
  
  constructor(
    make: string,
    model: string,
    year: number,
    color: string = 'Black',
    mileage: number = 0,
    hasSunroof: boolean = true,
    hasHeatedSeats: boolean = true,
    navigationSystem: string = 'Premium GPS'
  ) {
    super(make, model, year, color, mileage);
    this.hasSunroof = hasSunroof;
    this.hasHeatedSeats = hasHeatedSeats;
    this.navigationSystem = navigationSystem;
  }
  
  /**
   * Override start method for luxury car
   */
  public start(): void {
    super.start();
    if (this.isRunning) {
      console.log(`   Luxury features activated:`);
      console.log(`   - Sunroof: ${this.hasSunroof ? 'Available' : 'Not available'}`);
      console.log(`   - Heated Seats: ${this.hasHeatedSeats ? 'Available' : 'Not available'}`);
      console.log(`   - Navigation: ${this.navigationSystem}`);
    }
  }
  
  /**
   * Activate cruise control (LuxuryVehicle requirement)
   */
  public activateCruiseControl(): void {
    console.log(`⚡ Cruise control activated for ${this.getFullName()}`);
  }
  
  /**
   * Adjust suspension height (LuxuryVehicle requirement)
   * @param height - Height to adjust to (in cm)
   */
  public adjustSuspension(height: number): void {
    console.log(`🔄 ${this.getFullName()} suspension adjusted to ${height}cm`);
  }
  
  /**
   * Get luxury car info
   * @returns Detailed info string
   */
  public getLuxuryInfo(): string {
    return `${this.getInfo()} | Luxury Features: Sunroof(${this.hasSunroof}), Heated Seats(${this.hasHeatedSeats}), Nav(${this.navigationSystem})`;
  }
}

/**
 * Electric Car class extending Car and implementing ElectricVehicle interface
 */
export class ElectricCar extends Car implements ElectricVehicle {
  // ElectricVehicle specific properties
  public batteryCapacity: number; // kWh
  public range: number; // miles
  public chargingTime: number; // hours
  private currentBatteryLevel: number; // percentage
  
  constructor(
    make: string,
    model: string,
    year: number,
    color: string = 'Blue',
    mileage: number = 0,
    batteryCapacity: number = 75,
    range: number = 300,
    chargingTime: number = 8
  ) {
    super(make, model, year, color, mileage);
    this.batteryCapacity = batteryCapacity;
    this.range = range;
    this.chargingTime = chargingTime;
    this.currentBatteryLevel = 100; // Start with full battery
  }
  
  /**
   * Override start method for electric car
   */
  public start(): void {
    if (this.currentBatteryLevel < 10) {
      console.log(`⚠️  Battery too low! Please charge before starting.`);
      return;
    }
    
    super.start();
    console.log(`   🔋 Battery level: ${this.currentBatteryLevel}%`);
    console.log(`   📏 Range: ${this.range} miles`);
  }
  
  /**
   * Override drive method to account for battery usage
   * @param distance - Distance to drive in miles
   */
  public drive(distance: number): void {
    if (!this.isRunning) {
      console.log(`⚠️  Please start the car before driving!`);
      return;
    }
    
    const batteryUsed = (distance / this.range) * 100;
    if (batteryUsed > this.currentBatteryLevel) {
      console.log(`⚠️  Not enough battery for ${distance} miles!`);
      return;
    }
    
    this.currentBatteryLevel -= batteryUsed;
    this.mileage += distance;
    
    console.log(`⚡ ${this.getFullName()} drove ${distance} miles using ${batteryUsed.toFixed(1)}% battery.`);
    console.log(`   Remaining battery: ${this.currentBatteryLevel.toFixed(1)}%`);
    console.log(`   Total mileage: ${this.mileage.toLocaleString()} miles`);
  }
  
  /**
   * Charge the electric car (ElectricVehicle requirement)
   */
  public charge(): void {
    console.log(`🔌 Charging ${this.getFullName()}...`);
    this.currentBatteryLevel = 100;
    console.log(`   ✅ Battery fully charged!`);
  }
  
  /**
   * Get current battery level (ElectricVehicle requirement)
   * @returns Battery level percentage
   */
  public getBatteryLevel(): number {
    return this.currentBatteryLevel;
  }
  
  /**
   * Get electric car info
   * @returns Detailed info string
   */
  public getElectricInfo(): string {
    return `${this.getInfo()} | Battery: ${this.batteryCapacity}kWh, Range: ${this.range}mi, Charge Time: ${this.chargingTime}h`;
  }
}
