import { Form, Input } from "antd";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { CHANGE_NICKNAME_REQUEST } from "../reducers/user";

const NicknameEditForm = () => {
  const dispatch = useDispatch();
  const { me, changeNicknameLoading } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(me?.nickname || "");

  const onSubmit = useCallback(() => {
    console.log();
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  const style = useMemo(
    () => ({
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px",
    }),
    []
  );

  return (
    <Form style={style} onFinish={onSubmit}>
      <Input.Search
        value={nickname}
        addonBefore="닉네임"
        enterButton="수정"
        onSearch={onSubmit}
        onChange={onChangeNickname}
        loading={changeNicknameLoading}
      />
    </Form>
  );
};

export default NicknameEditForm;
