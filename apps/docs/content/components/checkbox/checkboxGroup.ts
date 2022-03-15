const App = `import { Checkbox } from '@nextui-org/react';
    
export default function App() {
  return <Checkbox.Group color="secondary" value={['buenos-aires']}>
  <Checkbox value="buenos-aires">
    Buenos Aires
  </Checkbox>
  <Checkbox value="sydney">
    Sydney
  </Checkbox>
  <Checkbox value="london">
    London
  </Checkbox>
  <Checkbox value="tokyo">
    Tokyo
  </Checkbox>
</Checkbox.Group>
}
`;

const react = {
  '/App.js': App
};

export default {
  ...react
};
