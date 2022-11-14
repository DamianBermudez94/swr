function ShowData(){
    const data = useMe();
    return <div>Data: {JSON.stringify(data)}</div>
  }