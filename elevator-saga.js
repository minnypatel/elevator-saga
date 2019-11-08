{
  init: function(elevators, floors) {
    elevators.forEach((elevator, index) => {
      elevator.on('idle', () => {
        elevator.goToFloor(0);
      });

      elevator.on('floor_button_pressed', (floorNumber) => {
        elevator.goToFloor(elevator.getPressedFloors()[0]);
      });
    });
  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}