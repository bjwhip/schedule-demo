import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  constructor() { }

    combinedItems = [];

// ####################################################################
// My goal is for John Stewarts "Combined Schedule" to be [114, 115, 116, 117, 118, 119, 120, 121, 214, 215, 216, 217, 218, 220, 221, 222, 223]
// ####################################################################

    staff = [
      {
        name: 'John Stewart',
        updatedTimestamp: '1520221418024',
        house: 'A',
        scheduledDay: '03/25/2018',
        scheduledHours: [114, 115, 116, 117, 118, 119, 120, 121]
      },
      {
        name: 'John Stewart',
        availableHours: [100, 101, 102, 114, 115, 116, 117, 118, 119, 120, 121, 200, 201, 202, 214, 215, 216, 217, 218, 220, 221, 222, 223]
      },
      {
        name: 'John Stewart',
        updatedTimestamp: '1520221418026',
        house: 'A',
        scheduledDay: '03/26/2018',
        scheduledHours: [214, 215, 216, 217, 218]
      },
      {
        name: 'John Stewart',
        updatedTimestamp: '1520221418025',
        house: 'B',
        scheduledDay: '03/26/2018',
        scheduledHours: [220, 221, 222, 223]
      },
      {
        name: 'Hal Jordan',
        availableHours: [300, 301, 302, 203, 304, 305, 306, 307, 308, 309, 310, 111, 112, 113, 114, 115, 116, 117, 118, 119, 200, 201, 202],
        scheduledHours: [118, 119, 200, 201, 202]
      },
      {
        name: 'Guy Gardner',
        availableHours: [300, 301, 302, 203, 304, 305, 306, 307, 308, 309, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 200, 201, 202],
        scheduledHours: [114, 115, 116, 117, 300, 301, 302]
      }
    ];

    scheduleableHours(a, b) {
      const ret = [];
      if (!(Array.isArray(a) && Array.isArray(b))) {
          return ret;
      }
      let i;
      let key;

      for (i = a.length - 1; i >= 0; i--) {
        key = a[i];
        if (-1 === b.indexOf(key)) {
          ret.push(key);
        }
      }
      return ret;
  }

    combineObjects(a, b) {
        return this.staff.reduce((currentArr, nextVal) => {
          return currentArr.filter((current) => current.name === nextVal.name).length === 0
            ? [].concat(currentArr, nextVal)
            : currentArr.map((current) => current.name === nextVal.name ? Object.assign({}, current, nextVal) : current);
        }, []);
    }

    combineStaff() {
      for (let i = 0; i < this.staff.length; i++) {
        this.combineObjects(this.staff[i], this.staff[i + 1])
      }
      console.log(this.combineObjects('', ''));
      this.combinedItems.push(this.combineObjects('', ''));
      console.log(this.combinedItems);
    }

    ngOnInit() { }



  }
