import {
  Button,
  Dropdown,
  Label,
  Modal,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { StateContext } from "../context/context";

const ReviewTable = ({ reviews }) => {
  const { refresh, setRefresh, setLoading } = useContext(StateContext);
  const navigate = useNavigate();
  const handleUpdate = (review) => {
    navigate(`/edit-review/${review?._id}`);
  };

  const handleDelete = (id) => {
    fetch(`https://asg-111.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(true);
        if (data.status === true) {
          setLoading(false);
          toast.success("Deleted Successfully", { autoClose: 1500 });
          setRefresh(!refresh);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Review Content</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Ratings</Table.HeadCell>
          <Table.HeadCell>Service Name</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {reviews?.map((review) => (
            <Table.Row
              key={review._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {review?.comment}
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-1 items-center">
                  <img
                    src={review?.user_img}
                    className="w-10 h-10 object-cover"
                  />
                  <div>{review?.user_name}</div>
                </div>
              </Table.Cell>
              <Table.Cell>{review?.rating}</Table.Cell>
              <Table.Cell>
                <div className="flex gap-1 items-center">
                  <img
                    src={review?.package_imgUrl}
                    className="w-10 h-10 object-cover"
                  />
                  <div>{review?.package_name}</div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Dropdown label="Create Actions">
                  <Dropdown.Item onClick={() => handleUpdate(review)}>
                    Update
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDelete(review?._id)}>
                    Delete
                  </Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ReviewTable;
