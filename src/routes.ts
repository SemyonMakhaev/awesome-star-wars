export const routes = {
  people: '/',
  character(id: string) {
    return `/${id}`;
  },
  editCharacter(id: string) {
    return `/${id}/edit`;
  },
};
