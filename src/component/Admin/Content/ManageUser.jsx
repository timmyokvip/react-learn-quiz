import { useState, useEffect } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { getAllUsers, getUserWithPage } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const LIMIT_USER = 6;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [showModalDelete, setShowModalDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState({});

  const [listUsers, setListUsers] = useState([]);

  // componentDidMount
  useEffect(() => {
    // fetchListUser();
    fetchListUserWithPage(1);
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const fetchListUserWithPage = async (page) => {
    let res = await getUserWithPage(page, LIMIT_USER);
    if (res.EC === 0) {
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleBtnDelete = (user) => {
    setShowModalDelete(true);
    setDataDelete(user);
  };

  const resetUpdateData = () => {
    setDataUpdate({});
  };

  return (
    <div className="manage-user-container p-4">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div>
          <button onClick={() => setShowModalCreateUser(true)}>
            <FcPlus />
            Add new user
          </button>
        </div>
        <div>
          {/* <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleBtnDelete={handleBtnDelete}
          /> */}

          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleBtnDelete={handleBtnDelete}
            fetchListUserWithPage={fetchListUserWithPage}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUser={fetchListUser}
          fetchListUserWithPage={fetchListUserWithPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataUpdate={dataUpdate}
          resetUpdateData={resetUpdateData}
          setDataUpdate={setDataUpdate}
        />

        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUser={fetchListUser}
          resetUpdateData={resetUpdateData}
          fetchListUserWithPage={fetchListUserWithPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <ModalDeleteUser
          show={showModalDelete}
          setShow={setShowModalDelete}
          dataDelete={dataDelete}
          fetchListUser={fetchListUser}
          fetchListUserWithPage={fetchListUserWithPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ManageUser;
