type OfferHostProps = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
}

export default function OfferHost({ avatarUrl, name, isPro }: OfferHostProps): JSX.Element {
  return (
    <div className="offer__host-user user">
      <div className={`offer__avatar-wrapper ${isPro && 'offer__avatar-wrapper--pro'} user__avatar-wrapper`}>
        <img
          className="offer__avatar user__avatar"
          src={avatarUrl}
          width={74} height={74} alt="Host avatar"
        />
      </div>

      <span className="offer__user-name">{name}</span>

      {isPro &&
        <span className="offer__user-status">Pro</span>}
    </div>
  );
}
