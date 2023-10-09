// export const IsAdminRole = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user?.role_id)) {
//       return res.json({
//         status: "fail",
//         message: `the ${req.user?.role_id} cannot do it!`,
//       });
//     }
//     return next();
//   };
// };

import { Request, Response, NextFunction } from "express";

export const IsAdminRole = (...roles: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user?.role_id as number)) {
      return res.json({
        status: "fail",
        message: `sorry you are not authorised to do this`,
      });
    }
    return next();
  };
};
