export default function contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form action="">
        <label htmlFor="">
          <span>Your Email:</span>
          <input type="email" name="email" required />
        </label>
        <label htmlFor="">
          <span>Your Message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
