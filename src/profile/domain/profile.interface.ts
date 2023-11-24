import { BaseEntityProps } from '@common/domain';

export interface ProfileProps extends BaseEntityProps {
  readonly profile_id: string;
  readonly userId: string;
  readonly headline: string;
  readonly summary: string;
  readonly website: string;
  readonly vanityName: string;
  readonly industry: string;
  readonly location: string;
}

export type ProfileConstructorProps = Pick<
  ProfileProps,
  'profile_id' | 'userId' | 'createdAt' | 'updatedAt'
>;
