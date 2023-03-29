//meu css
import  styles from './Register.module.css'

// meus imports
import { useState, useEffect} from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { wait } from '@testing-library/user-event/dist/utils'


const  Register = () => {

  const [displayName, setDisplayName] = useState ("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [confirmPassword, setConfirmPassword] = useState ("")
  const [error, setError] = useState ("")

  const { createUser, error: authError, loading} = useAuthentication()


  const handleSubimit = async (e) => {
    e.preventDefault()
    setError("")
    const user = { displayName, email, password}

    if (password != confirmPassword){
      setError("As senhas precisam ser iguais")
      return
    }
 
    const res = await createUser(user);

}

useEffect (() => {
  if (authError){
    setError(authError)
  }
},[authError] )


  return (
    <div  className={styles.register} >
        <h1>Cadastre-se para postar seu conteúdo</h1>
        <p>Crie seu usuário e compartihe suas histórias.</p>
        <form onSubmit={handleSubimit}  >
          <label >
            <span>Nome:</span>
            <input type="text" name="displayName" required placeholder="Nome de usuário" value={ displayName} onChange={(e) => setDisplayName(e.target.value)} />
          </label>
          <label >
            <span>E-mail:</span>
            <input type="email" name="email" required placeholder="E-mail de acesso"
            value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label >
            <span>Senha:</span>
            <input type="password" name="password" required placeholder="Insira sua senha"
            value={password } onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label >
            <span>Confirmação de Senha:</span>
            <input type="password" name="confirpassword" required placeholder="Insira sua senha"
              value={confirmPassword } onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          { !loading &&  <button className='btn btn-success my-4'>Cadastrar</button> }
          {loading && <button className='btn btn-success my-4' disabled  >Aguarde...</button>}
          {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register