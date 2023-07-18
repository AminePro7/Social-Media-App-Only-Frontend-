import React from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'


const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>)
}

export default ProfileSide