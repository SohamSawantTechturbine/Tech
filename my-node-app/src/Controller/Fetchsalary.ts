import { Request, Response } from 'express';
import { Salary } from '../Connection/Connection';

export const fetchSalary = async (req: Request, res: Response) => {
  const { employeeId } = req.params;

  try {
    const findsalaries = await Salary.findAll({ where: { employeeId } });
    res.status(200).json({ message: 'Salaries fetched successfully!', data: findsalaries });
  } catch (error) {
    console.error('Error fetching salaries:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
