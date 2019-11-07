{
  init: function(elevators, floors) {

    const elevatorMove = (elevator) => {
      const getPressedFloorsArray = elevator.getPressedFloors();
      if(getPressedFloorsArray.length > 0) {
        elevator.goToFloor(getPressedFloorsArray[0]);
      }
      elevator.goToFloor(0);
    };

    elevators.forEach((elevator, index) => {

      elevator.on('idle', () => {
        elevatorMove(elevator);
      });

      elevator.on('floor_button_pressed', (floorNumber) => {
        elevator.goToFloor(floorNumber);
      });
    });
  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}