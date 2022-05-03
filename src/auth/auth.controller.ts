import { Controller } from '@nestjs/common';
import { LoginRequestDto, ValidateRequestDto } from './auth.dto';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ValidateResponse,
} from './auth.pb';
import { AuthService } from './service/auth.service';

@Controller('auth')
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private authService: AuthService) {}

  public async register(data: RegisterRequest): Promise<RegisterResponse> {
    console.log(data);
    return this.authService.register(data);
  }

  public async login(payload: LoginRequestDto): Promise<LoginResponse> {
    return this.authService.login(payload);
  }

  public async validate(
    payload: ValidateRequestDto,
  ): Promise<ValidateResponse> {
    return this.authService.validate(payload);
  }
}
