interface IUsers {
  first_name: string;
  last_name: string;
  username: string;
}

let users: Array<IUsers> = [
  {
    first_name: "Shane",
    last_name: "Oaks",
    username: "SOaks",
  },
  {
    first_name: "Elwood",
    last_name: "Horsfield",
    username: "Elwooders",
  },
];

const getUsers = ({ response }: { response: any }) => {
  response.body = users;
};

const addUsers = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  if (!request.body()) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "The request must have a body",
    };
    return;
  }

  const content = await request.body().value;
  const rows = content.rows;
  rows.forEach((singleEntry: IUsers) => users.push(singleEntry));
  response.body = { message: "users have been added successfully" };
  response.status = 200;
};

export { getUsers, addUsers };
