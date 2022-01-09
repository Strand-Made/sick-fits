import useForm from '../lib/useForm';

const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Shoes',
    price: 244,
    description: 'These shoes are rad',
  });
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          id="name"
          name="name"
          placeholder="name"
          type="text"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Name
        <input
          id="price"
          name="price"
          placeholder="price"
          type="number"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={clearForm}>
        Clear form
      </button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default CreateProduct;
