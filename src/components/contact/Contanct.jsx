import './contact.scss'

const Contanct = () => {
  return <div className="contact">
    <div className="textContainer">
        <h1>Let's Work Together.</h1>
        <div className="item">
            <h2>Mail</h2>
            <span>hello@react.dev</span>
        </div>
        <div className="item">
            <h2>Address</h2>
            <span>Hello street new York</span>
        </div>
        <div className="item">
            <h2>Phone</h2>
            <span>+91 234 456</span>
        </div>
    </div>
    <div className="formContainer">
        <form action="">
            <input type='text' required placeholder='Name'/>
            <input type='email' required placeholder='EMail'/>
            <textarea rows={8} placeholder='Message'/>
            <button>Submit</button>
        </form>
    </div>
  </div>;
}

export default Contanct