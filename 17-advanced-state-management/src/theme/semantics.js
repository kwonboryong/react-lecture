import primitives from './primitives';

const { color } = primitives;

export const THEME_MODE = {
  LIGHT: 'light',
  DARK: 'dark',
};

export default {
  [THEME_MODE.LIGHT]: {
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
  [THEME_MODE.DARK]: {
    forground: color.white,
    background: color.slate[900],
    accent: color.yellow[500],

    GrandParent: {
      background: color.pink[900],
      label: color.pink[700],
    },

    Parent: {
      background: color.pink[800],
      label: color.pink[600],
    },

    Child: {
      background: color.pink[700],
      label: color.pink[500],
    },

    GrandChild: {
      background: color.pink[600],
      label: color.pink[400],
    },

    TodoListApp: {
      themeColor: color.pink[700],
      focusColor: color.pink[500],
    },
  },
};
