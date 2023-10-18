import React, { useState, useEffect } from 'react';
import classes from './AvailableItems.module.css';
import Filter from './Filter.js';

const AvailableItems = (props) => {
  const [itemData, setItemData] = useState([]);
  const { onAddItem } = props;
  const [filteredYear, setFilteredYear] = useState('');
  const [isLoading, setIsLoading] = useState(null);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const data = await fetch('http://localhost:8080/api/get-items/items');
      if (!data.ok) {
        throw Error('Something went wrong with fetching');
      }
      const response = await data.json();
      console.log(response.items);

      setItemData(response.items);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const onChangeFilterDate = (filteredYear) => {
    console.log(filteredYear);
    setFilteredYear(filteredYear);
  };

  if (isLoading) {
    return <h1 className={classes['process-sign']}>Loading</h1>;
  }

  console.log(itemData);

  const filteredArray = itemData.filter(
    (item) => item.useByDate === filteredYear
  );

  const arrayToShow = filteredYear === '' ? itemData : filteredArray;

  return (
    <div className={classes['items-container']}>
      <Filter selected={filteredYear} onDropDownChange={onChangeFilterDate} />
      <ul>
        {isLoading}
        {arrayToShow.length === 0 ? (
          <div className={classes.display}>
            No selected item for filtered Year
          </div>
        ) : (
          arrayToShow.map((item) => {
            return (
              <div className={classes['list-items']} key={item.id}>
                <h2>{item.name}</h2>
                <li>
                  <img
                    src={item.image}
                    alt="images"
                    width="100%"
                    height="100%"
                  />
                </li>
                <li className={classes['edit-list']}>
                  <div className={classes['list-price']}>
                    <div className={classes.priceAmount}>£{item.price}</div>
                    <div>Use By {item.useByDate}</div>
                  </div>

                  <button onClick={() => onAddItem(item)}>Add to Cart</button>
                </li>
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default AvailableItems;
