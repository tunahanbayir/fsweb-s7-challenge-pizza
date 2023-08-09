import React, { useState } from 'react';



const PizzaOrderForm = () => {
  const [size, setSize] = useState('');
  const [ingredients, setIngredients] = useState({
    cheese: false,
    pepperoni: false,
    mushrooms: false,
    olives: false,
  });
  const [specialChoice, setSpecialChoice] = useState('');

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleIngredientsChange = (event) => {
    const { name, checked } = event.target;
    setIngredients((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSpecialChoiceChange = (event) => {
    setSpecialChoice(event.target.value);
  };

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    // Veritabanına kaydı burada yapabilirsiniz.
    // Örnek olarak console'a yazdıralım.
    console.log('Sipariş Verildi:');
    console.log('Boyut:', size);
    console.log('Malzemeler:', ingredients);
    console.log('Özel Seçim:', specialChoice);

    // Formu sıfırla
    setSize('');
    setIngredients({
      cheese: false,
      pepperoni: false,
      mushrooms: false,
      olives: false,
    });
    setSpecialChoice('');
  };

  return (
  

    <form onSubmit={handleOrderSubmit}>
        

      <label>
        Boyut:
        <select id="size-dropdown" value={size} onChange={handleSizeChange}>
          <option value="small">Küçük</option>
          <option value="medium">Orta</option>
          <option value="large">Büyük</option>
        </select>
      </label>

      <label>
        Malzemeler:
        <div>
          <label>
            Peynir:
            <input
              type="checkbox"
              name="cheese"
              checked={ingredients.cheese}
              onChange={handleIngredientsChange}
            />
          </label>
          <label>
            Pepperoni:
            <input
              type="checkbox"
              name="pepperoni"
              checked={ingredients.pepperoni}
              onChange={handleIngredientsChange}
            />
          </label>
          <label>
            Mantar:
            <input
              type="checkbox"
              name="mushrooms"
              checked={ingredients.mushrooms}
              onChange={handleIngredientsChange}
            />
          </label>
          <label>
            Zeytin:
            <input
              type="checkbox"
              name="olives"
              checked={ingredients.olives}
              onChange={handleIngredientsChange}
            />
          </label>
        </div>
      </label>

      <label>
        Özel Seçim:
        <input
          type="text"
          id="special-text"
          value={specialChoice}
          onChange={handleSpecialChoiceChange}
        />
      </label>

      <button type="submit" id="order-button">
        Sipariş Ver
      </button>
    </form>
  );
};

export default PizzaOrderForm;



