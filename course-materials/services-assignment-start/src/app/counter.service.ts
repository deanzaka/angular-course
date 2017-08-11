export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  countActToInact() {
    this.activeToInactive++;
    console.log("Active to Inactive: " + this.activeToInactive);
  }

  countInactToAct() {
    this.inactiveToActive++;
    console.log("Inactive to Active: " + this.inactiveToActive);
  }
}
