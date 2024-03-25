import login from '../firebase/login';

/**
 * @description Login component
 */

const Login = () => {

  function handleLogIn() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    login.loginUser(email, password);
  }

  function closeModal() {
    document.getElementById('my_modal_3').close();
  }

  return (
    <>
      <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-zinc-100 dark:bg-zinc-800">
          <form method="post" className="mx-auto grid grid-cols-2 space-y-4 shadow-lg p-3">
            {/* Change the span tag to a button for close */}
            <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2" onClick={closeModal}>✕</button>

            <div className="form-group grid-cols-2">
              <label htmlFor="firstName">Firstname</label>
              <input type="text" name="firstName" id="firstName" className="rounded-md" required aria-required/>
            </div>
            <div className="form-group grid-cols-2">
              <label htmlFor="lastName">Lastname</label>
              <input type="text" name="lastName" id="lastName" required aria-required/>
            </div>
            <div className="form-group grid-cols-2">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required aria-required/>
            </div>
            <div className="form-group grid-cols-2">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required aria-required/>
            </div>
            <button type="button" className="btn btn-primary items-center" onClick={handleLogIn}>Login</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;