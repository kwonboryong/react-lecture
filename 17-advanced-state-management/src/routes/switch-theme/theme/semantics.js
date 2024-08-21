import primitives from './primitives';

const { color } = primitives;

export default {
  light: {
    forground: color.slate[800],
    background: color.white,
    accent: color.purple[500],

    GrandParent: {
      background: color.slate[300],
      label: color.purple[600],
    },

    Parent: {
      background: color.slate[200],
      label: color.purple[500],
    },

    Child: {
      background: color.slate[100],
      label: color.purple[400],
    },

    GrandChild: {
      background: color.white,
      label: color.purple[300],
    },

    TodoListApp: {
      themeColor: color.purple[400],
      focusColor: color.yellow[400],
    },
  },
  dark: {
    forground: color.white,
    background: color.slate[900],
    accent: color.yellow[500],

    GrandParent: {
      background: color.teal[900],
      label: color.teal[700],
    },

    Parent: {
      background: color.teal[800],
      label: color.teal[600],
    },

    Child: {
      background: color.teal[700],
      label: color.teal[500],
    },

    GrandChild: {
      background: color.teal[600],
      label: color.teal[400],
    },

    TodoListApp: {
      themeColor: color.teal[700],
      focusColor: color.teal[500],
    },
  },
};
