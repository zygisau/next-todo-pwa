import { NextApiRequest, NextApiResponse } from "next";

export interface Todo {
    id: string,
    name: string,
    isDone: boolean
}

export default async (req: NextApiRequest, res: NextApiResponse<Todo>) => {
    const url = "http://localhost:3004/todos/";

    return fetch(url)
        .then((r) => r.json())
        .then((data) => {
            return res.status(200).json(data as Todo);
        });
};