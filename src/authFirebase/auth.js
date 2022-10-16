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
        return alert('Enjoy watching movies. Grab more popcorn and snacks.');
      } else {
        throw new Error(`Email or Password is wrong`);
      }
    })
    .catch(e => alert(e));
}

export function logInUserWithEmail(email, password) {
  const apiKey = `AIzaSyCHg4J_qzob1qjMAXidJJyR0ERxgFjrLiU`;
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
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
        return alert('Enjoy watching movies. Grab more popcorn and snacks.');
      } else {
        throw new Error(`Email or Password is wrong`);
      }
    })
    .catch(e => alert(e));
}