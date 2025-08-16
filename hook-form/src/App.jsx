import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("회원가입 데이터:", data);
    alert(`가입 완료! \n이름: ${data.name}\n이메일: ${data.email}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>이름</label>
          <input
            {...register("name", { required: "이름은 필수 입력입니다." })}
            placeholder="이름을 입력하세요"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        <div>
          <label>이메일</label>
          <input
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /^\S+@\S+$/,
                message: "이메일 형식이 아닙니다.",
              },
            })}
            placeholder="이메일을 입력하세요"
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>비밀번호</label>
          <input
            type="password"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              minLength: {
                value: 6,
                message: "비밀번호는 최소 6자 이상이어야 합니다.",
              },
            })}
            placeholder="비밀번호를 입력하세요"
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          가입하기
        </button>
      </form>
    </div>
  );
}
