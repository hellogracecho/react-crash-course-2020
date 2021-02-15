import React from 'react';

function BarChart() {
  const [title, setTitle] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [chart, setChart] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && count) {
      const newChart = {
        id: Math.floor(Math.random() * 10) + 1, //id random 1 - 10
        title,
        count,
      };
      setChart((chart) => {
        return [...chart, newChart];
      });
      // reset form
      setTitle('');
      setCount(0);
    } else {
      console.log('empty values');
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='title'>Title : </label>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='Type your input'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='count'>count : </label>
          <input
            type='number'
            id='count'
            name='count'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      <br />
      {chart.map((c, index) => {
        const { id, title, count } = c;
        return (
          <div key={id}>
            <h1>{title}</h1>
            <h2>{count}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default BarChart;
