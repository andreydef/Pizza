import React from 'react';

import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            onClick={(name) => console.log(name)}
            items={[
              'Мясні',
              'Вегетеріанські',
              'Гриль',
              'Гострі',
              'Закриті'
            ]}
          />
          <SortPopup items={[
            { name: 'популярності', type: 'popular' },
            { name: 'ціні', type: 'price' },
            { name: 'алфавіту', type: 'alphabet' }
          ]}
          />
        </div>
        <h2 className="content__title">Всі піцци</h2>
        <div className="content__items">
          {
            items.map((obj) => <PizzaBlock
              key={obj.id}
              {...obj}
            />)
          }
        </div>
      </div>
    </div>
  )
}

export default Home;