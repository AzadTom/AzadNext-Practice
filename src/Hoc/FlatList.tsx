interface Props<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
}

const FlatList = <T,>(props: Props<T>) => {
  const { data, renderItem } = props;

  return <>{data.map((item: T) => renderItem(item))}</>;
};

export default FlatList;
