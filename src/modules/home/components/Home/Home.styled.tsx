import { PrimaryButton } from '@/common/components/ui/PrimaryButton';
import { COLORS } from '@/common/constants';
import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100%;
  background-color: ${COLORS.gray[200]};

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContentWrapper = styled.div`
  padding-top: 64px;
  width: 400px;
  margin-inline: auto;
`;

export const Card = styled.div`
  padding: 48px 24px;
  border-radius: 12px;
  box-shadow:
    0 4px 8px 0 ${COLORS.gray[300]},
    0 6px 20px 0 ${COLORS.gray[300]};
  background-color: ${COLORS.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const AddressInputWrapper = styled(Card)`
  margin-bottom: 24px;
  align-items: stretch;
`;

export const ErrorText = styled.p`
  font-size: 0.8rem;
  text-align: right;
  color: ${COLORS.danger};
  margin-top: 4px;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${COLORS.gray[700]};
  font-weight: 100;
  font-size: 24px;
`;

export const TightColumn = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const SuccessTitle = styled(Title)`
  color: ${COLORS.success};
`;

export const ErrorTitle = styled(Title)`
  color: ${COLORS.danger};
`;

export const Description = styled.p`
  color: ${COLORS.gray[300]};
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  margin-top: 24px;
`;
