export function authWithEmailAndPassword(email, password) {
  const apiKey = `AIzaSyCHg4J_qzob1qjMAXidJJyR0ERxgFjrLiU`;
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(r => {
      if (r.ok) {
        return alert('pruvi zdarov');
      } else {
        throw new Error(`email is not def`);
      }
    })
    .catch(e => alert(e));
}

