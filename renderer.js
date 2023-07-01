const func = async () => {
  alert('test');
  const response = await window.versions.ping()
  alert(response) // prints out 'pong'
}

func()