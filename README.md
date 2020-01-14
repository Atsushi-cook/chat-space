# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
has_many :messages
has_many :users_groups
has_many :groups, through: :user_groups

## groopsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
has_many :user_groups
has_many :users, through: :user_groups
has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image|text|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
belongs_to :group
belongs_to :user

## user_groupsテーブル
|Column|Type|Options|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
belongs_to :user
belongs_to :group




