function App() {
  return (
    <div className="App">
      <h3>Добавить новый продукт</h3>
      <form>
        <input placeholder="Название продукта" />
        <input placeholder="Ккал на 100 г" />
        <button>Добавить</button>
      </form>
      <h3>Добавить запись</h3>
      <form>
        <input type="date" />
        <select>
          <option value="product">Продукт</option>
        </select>
        <input placeholder="Вес (г)" />
        <button>Записать</button>
      </form>
    </div>
  );
}

export default App;
