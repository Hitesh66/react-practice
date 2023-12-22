const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: '1' }, 'I am an H1 tag'),
    React.createElement('h2', { id: '2' }, 'I am an H2 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', { id: '1' }, 'I am an H1 tag'),
    React.createElement('h2', { id: '2' }, 'I am an H2 tag'),
  ]),
]);
console.log(parent);
const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' },
  'Hello World from React'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
