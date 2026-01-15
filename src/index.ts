import { Vehicle } from './interfaces/Vehicle';
import { Car, LuxuryCar, ElectricCar } from './classes/Car';

/**
 * Main function to demonstrate the Vehicle interface and Car class
 */
function main(): void {
  console.log('='.repeat(60));
  console.log('🚗 VEHICLE INTERFACE AND CAR CLASS DEMONSTRATION');
  console.log('='.repeat(60));
  
  // 1. Create a basic Car instance (as per instructions)
  console.log('\n📋 1. BASIC CAR INSTANCE');
  console.log('-'.repeat(40));
  
  const myCar: Car = new Car('Toyota', 'Camry', 2022, 'Silver', 15000);
  console.log(`Created car: ${myCar.getInfo()}`);
  
  // Call the start method (as per instructions)
  myCar.start();
  
  // Demonstrate additional functionality
  myCar.drive(50);
  console.log(`Car age: ${myCar.getAge()} years`);
  myCar.stop();
  
  // 2. Demonstrate using Vehicle interface type
  console.log('\n📋 2. USING VEHICLE INTERFACE TYPE');
  console.log('-'.repeat(40));
  
  const vehicle: Vehicle = new Car('Honda', 'Civic', 2021, 'Red', 25000);
  console.log(`Vehicle: ${vehicle.make} ${vehicle.model} ${vehicle.year}`);
  vehicle.start();
  
  if (vehicle.getInfo) {
    console.log(vehicle.getInfo());
  }
  
  // 3. Create and demonstrate LuxuryCar
  console.log('\n📋 3. LUXURY CAR DEMONSTRATION');
  console.log('-'.repeat(40));
  
  const luxuryCar = new LuxuryCar(
    'Mercedes-Benz',
    'S-Class',
    2023,
    'Black',
    5000,
    true,
    true,
    'Mercedes MBUX'
  );
  
  console.log(luxuryCar.getLuxuryInfo());
  luxuryCar.start();
  luxuryCar.activateCruiseControl();
  luxuryCar.adjustSuspension(15);
  luxuryCar.drive(100);
  luxuryCar.stop();
  
  // 4. Create and demonstrate ElectricCar
  console.log('\n📋 4. ELECTRIC CAR DEMONSTRATION');
  console.log('-'.repeat(40));
  
  const electricCar = new ElectricCar(
    'Tesla',
    'Model 3',
    2023,
    'Midnight Silver',
    12000,
    82,
    358,
    10
  );
  
  console.log(electricCar.getElectricInfo());
  electricCar.start();
  electricCar.drive(150);
  console.log(`Battery level: ${electricCar.getBatteryLevel().toFixed(1)}%`);
  electricCar.charge();
  electricCar.stop();
  
  // 5. Array of different vehicle types
  console.log('\n📋 5. VEHICLE COLLECTION');
  console.log('-'.repeat(40));
  
  const vehicles: Vehicle[] = [
    new Car('Ford', 'Mustang', 2020, 'Yellow', 20000),
    new LuxuryCar('BMW', '7 Series', 2022, 'White', 8000),
    new ElectricCar('Rivian', 'R1T', 2023, 'Forest Green', 5000)
  ];
  
  console.log(`Total vehicles: ${vehicles.length}`);
  
  vehicles.forEach((vehicle, index) => {
    console.log(`\nVehicle ${index + 1}:`);
    console.log(`  Type: ${vehicle.constructor.name}`);
    console.log(`  Make/Model: ${vehicle.make} ${vehicle.model}`);
    vehicle.start();
    if (vehicle.stop) {
      vehicle.stop();
    }
  });
  
  // 6. Static method demonstration
  console.log('\n📋 6. STATIC METHOD DEMONSTRATION');
  console.log('-'.repeat(40));
  
  const staticCar = Car.create('Chevrolet', 'Corvette', 2023);
  console.log(`Created using static method: ${staticCar.getInfo()}`);
  staticCar.start();
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ DEMONSTRATION COMPLETE');
  console.log('='.repeat(60));
}

/**
 * Helper function to demonstrate type checking
 */
function demonstrateTypeChecking(): void {
  console.log('\n🔍 TYPE CHECKING DEMONSTRATION');
  console.log('-'.repeat(40));
  
  const testCar = new Car('Test', 'Model', 2023);
  
  // Type checking example
  const isVehicle: boolean = testCar instanceof Car;
  console.log(`Is testCar an instance of Car? ${isVehicle}`);
  
  // Interface compatibility check
  const vehicle: Vehicle = testCar; // This works because Car implements Vehicle
  console.log(`Can assign Car to Vehicle interface? Yes`);
  
  // Checking property types
  console.log(`Type of make: ${typeof testCar.make}`);
  console.log(`Type of year: ${typeof testCar.year}`);
  
  // Method existence check
  console.log(`Has start method? ${typeof testCar.start === 'function'}`);
}

// Run the main function
try {
  main();
  demonstrateTypeChecking();
} catch (error) {
  console.error('❌ Error occurred:', error);
}
