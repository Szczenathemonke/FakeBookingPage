function FooterHomepage() {
  return (
    <footer className="flex justify-center min-h-[100px] relative bottom-0 bg-gradient-to-br from-emerald-100 to-emerald-400 ">
      <div className="flex justify-between items-center p-10 gap-5 lg:w-1/2">
        <div>fakeBooking @ 2023</div>
        <div>
          <span className="font-bold">contact info </span>
          <ul>
            <li>
              <span>email: </span>
              <a href="mailto:fakebooking@example.com">
                fakebooking@example.com
              </a>
            </li>
            <li>phone: +48 111 111 111 </li>
            <li>
              <span>github:</span>{" "}
              <a href="https://github.com/Szczenathemonke/">SzczenaTheMonke</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterHomepage;
