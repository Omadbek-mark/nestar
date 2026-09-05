import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { ViewService } from '../view/view.service';
import { LikeService } from '../like/like.service';
import { MemberService } from '../member/member.service';
import { InjectModel } from '@nestjs/mongoose';
import { Follower, Following } from '../../libs/dto/follow/follow';

@Injectable()
export class FollowService {
  constructor(
    @InjectModel('Follow') private readonly followModel: Model<Follower | Following>,
    private memberService: MemberService,
  ) { }
}
