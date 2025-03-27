import jwt from 'jsonwebtoken';
import ResponseMessages from '../ts/enum/ResponseMessages';
import env from '../config/env';

const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: ResponseMessages.TOKEN_NOT_PROVIDED });
  }

  jwt.verify(token, env.JWT_SECRET_KEY, (error: any, decoded: any) => {
    if (error) {
      return res.status(403).json({ message: ResponseMessages.TOKEN_INVALID_OR_EXPIRED });
    }
    req.user = decoded;
    next();
  });
};

export default authMiddleware;
