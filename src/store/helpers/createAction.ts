export default function withPayload<T>() {
  return (payload: T) => ({ payload });
}
