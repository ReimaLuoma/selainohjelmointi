import Task from './Task';

const data = [
  {
    'name': 'Painting walls',
    'tools': [
      'Brushes',
      'Masking tape',
      'Paint bucket'
    ],
    'steps': [
      'Remove old paint',
      'Fill holes and tracks with filler',
      'Paint',
      'Repaint'
    ]
  },
  {
    'name': 'Building stairs',
    'tools': [
      'Hammer',
      'Nails',
      'Planks'
    ],
    'steps': [
      'Build a frame',
      'Add supports',
      'Place planks as stairs on the frame',
      'Hammer the nails to the planks to keep them attached to the frame'
    ]
  },
  {
    'name': 'Tear down a wall',
    'tools': [
      'Sledgehammer'
    ],
    'steps': [
      'Hammer the wall',
      'Fix the support structures'
    ]
  }
];

function App() {
  return (
    <Task props = {data} />
  );
}

export default App;
