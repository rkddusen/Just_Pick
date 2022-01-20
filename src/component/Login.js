import logo from "../images/logo.png";

export default function Login(){
    return(
      <div className="LoginPage">
        {/* 전체 가운데 정렬을 하기 위해 div로 감싸기 */}
        <div>
          {/* 메인 로고 */}
          <div className='MainLogo'>
            <img  src={logo} width='300' height='300' alt='logo' />
          </div>
          {/* 로그인 */}
          <div className="loginInput">
            <div className="idText">
              <input type="text" placeholder="아이디" className="loginText"/>
            </div>

            <div className="pwText">
              <input type="password" placeholder="비밀번호" className="loginText"/>
            </div>
          </div>
          {/* 로그인 버튼 */}
          <div>
          <button className="loginButton">로그인</button>
          </div>
          {/* 찾기, 회원가입 */}
          <div className="loginService">
          <a href="#">아이디 / 비밀번호 찾기</a>
          <a href="#">회원 가입</a>
          </div>
        </div>
      </div>
    );
}