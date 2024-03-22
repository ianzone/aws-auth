import {
  CognitoIdentityProviderClient,
  SignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { handleCognitoError } from 'src/utils';
import { SignUpDto } from './dto/sign-up.dto';

const client = new CognitoIdentityProviderClient();

@Injectable()
export class SignupService {
  constructor(private configService: ConfigService) {}

  async signup(body: SignUpDto) {
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cognito-identity-provider/command/SignUpCommand/
    const command = new SignUpCommand({
      ClientId: this.configService.get<string>('ClientId'), // required
      Username: body.email, // required
      Password: body.password, // required
    });
    try {
      return await client.send(command);
    } catch (err) {
      handleCognitoError(err);
    }
  }
}
