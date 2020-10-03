//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const OneGigasecond = 1000000000;

export const gigasecond = (date) => {

    let newDateInSecond = (date.getTime() / 1000) + OneGigasecond;
    let newDate = new Date(newDateInSecond * 1000);

return newDate;

};