// Write function below
const groceries = (array) => {
  let list = [];
  for (let i = 0; i <= arr.length-1; i++) {
    list.push(array[i].item)
  }
  if (array.length > 2) {
    let list1 = [];
    for (let j = 0; j <= newArr.length-3; j++) {
      list1.push(list[j]);
  };
  return list1.join(', ') + `, ${list[list.length-2]} and ${list[list.length-1]}`;
} if (array.length === 2) {
    return list.join(' and ');
  } else {
    return list.join(', ');
  };

//console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
//console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
//console.log(groceries( [{item: 'Cheese Balls'}] ));
