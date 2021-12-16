const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 6;
  } else if (day === 'Wednesday') {
    return 7;
  } else if (day === 'Thursday') {
    return 6;
  } else if (day === 'Friday') {
    return 5;
  } else if (day === 'Saturday') {
    return 8;
  } else if (day === 'Sunday') {
    return 7;
  } else {
    return 'error';
  }
};

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
if (actualSleepHours === idealSleepHours) {
  console.log('You got the perfect amount of sleep.');
  }
if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed.');
  }
if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed. Get some rest.');
  }
};

calculateSleepDebt();
