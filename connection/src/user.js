/*Create a backend Restful Application, and design the following API. [10 Marks]
● An API that creates message records in the MESSAGE TABLE.
● An Api that read all the messages from the MESSAGE table.
● Test the API using POSTMAN.
● FRONTEND INTEGRATION IS OPTIONAL
● SHARE THE SCREENSHOT OF POSTMAN OUTPUT*/
const mysql=require("mysql");
const Promise=require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo=
{
    host:"localhost",
    user:"onkar",
    password:"cdac",
    database:"wpt1"
};

const createMsg=async(user) =>
{
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let insert='insert into message (msg) values(?)';
    await connection.queryAsync(insert,user.msg);
    await connection.endAsync();
};

const selectMsg=async(user) =>
{
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let select='select * from message';
    const list=await connection.queryAsync(select);
    console.log(list);
    await connection.endAsync();
    return list;
};


const abc= 
{
    msg:"Hello World"
}
createMsg(abc);
module.exports={createMsg,selectMsg};